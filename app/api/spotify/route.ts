import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";

export const revalidate = 0; // Disable caching

export async function GET() {
    try {
        const nowPlayingRes = await getNowPlaying();

        if (!nowPlayingRes) {
            // Missing credentials fallback
            return NextResponse.json({ isPlaying: false, title: "Not connected to Spotify" }, { status: 200 });
        }

        if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
            // Nothing is playing, fetch recently played
            const recentlyPlayedRes = await getRecentlyPlayed();

            if (!recentlyPlayedRes || recentlyPlayedRes.status === 204 || recentlyPlayedRes.status > 400) {
                return NextResponse.json({ isPlaying: false, title: "Not playing" }, { status: 200 });
            }

            const recentData = await recentlyPlayedRes.json();
            const track = recentData.items[0].track;

            return NextResponse.json({
                isPlaying: false,
                title: track.name,
                artist: track.artists.map((_artist: any) => _artist.name).join(", "),
                albumImageUrl: track.album.images[0]?.url,
                songUrl: track.external_urls.spotify,
            });
        }

        const song = await nowPlayingRes.json();

        if (song.item === null) {
            return NextResponse.json({ isPlaying: false, title: "Not playing" }, { status: 200 });
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
        const albumImageUrl = song.item.album.images[0]?.url;
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json({
            isPlaying,
            title,
            artist,
            albumImageUrl,
            songUrl,
        });
    } catch (error) {
        console.error("Spotify API error", error);
        return NextResponse.json({ isPlaying: false, title: "Not connected to Spotify", error: true }, { status: 200 });
    }
}
