function solution(word, rawPages) {
    word = word.toLowerCase();
    return rawPages
        .map((rawPage, index) => {
            const [_, url] = rawPage.match(/<meta property="og:url" content="([^"]+)"\/>/i);
            const tags = rawPage.match(/<[^>]+>/g);
            const basicScore = tags
                .reduce((raw, tag) => raw.replace(tag, ""), rawPage)
                .split(/[^a-zA-Z]/)
                .filter(w => w.toLowerCase() == word).length;
            const outUrls = tags.reduce((links, tag) => {
                const result = tag.match(/<a href="([^"]+)">/i);
                return result ? links.concat(result[1]) : links;
            }, []);

            return {
                index,
                url,
                outUrls,
                basicScore,
            };
        })
        .map((page, index, pages) => {
            page.linkScore = pages
                .filter(p => p.outUrls.some(url => url == page.url))
                .reduce((sum, p) => sum + p.basicScore/p.outUrls.length, 0);
            page.totalScore = page.linkScore + page.basicScore;
            return page;
        })
        .sort((a,b) => a.totalScore == b.totalScore ? a.index-b.index : b.totalScore - a.totalScore)[0].index;
}