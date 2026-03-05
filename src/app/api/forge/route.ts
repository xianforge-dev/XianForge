import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { text, style } = await req.json();

    // Mock panels in Reference 1 style
    const panels = [
        {
            image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1000",
            text: "你在哪里？(Where are you?)",
            qi_depth: "Heavenly (天级)"
        },
        {
            image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000",
            text: "Ancient forces awaken. (太古之力苏醒。)",
            qi_depth: "Earth (地级)"
        },
        {
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
            text: "Lightning descends from the nine heavens. (九天雷落。)",
            qi_depth: "Mystic (玄级)"
        },
        {
            image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000",
            text: "The Dao is absolute. (道法无边。)",
            qi_depth: "Yellow (黄级)"
        }
    ];

    return NextResponse.json({
        title: "Ascension Chapter 1 (飞升第一章)",
        panels: panels
    });
}
