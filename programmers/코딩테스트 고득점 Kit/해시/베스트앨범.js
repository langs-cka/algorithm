function solution(genres, plays) {
    let playlist = {};
    
    genres.forEach((genre, i) => {
        if (playlist[genre]) {
            playlist[genre].count += plays[i];
            playlist[genre].plays.push({i, play: plays[i]});
        } else {
            playlist[genre] = {
                count: plays[i],
                plays: [{
                    i,
                    play: plays[i],
                }],
            };
        }
    });
    
    return Object.values(playlist).sort((a, b) => b.count - a.count).map(v => {
        const temp = v.plays.sort((a, b) => {
            if (a.play === b.play) {
                return a.i - b.i;
            } 
            return b.play - a.play;
        }).map(v => v.i).slice(0, 2);
        return temp;
    }).reduce((acc, cur) => [...acc, ...cur], []);
}