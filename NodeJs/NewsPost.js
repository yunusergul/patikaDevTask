const news = [
    { title: 'Neque', contents: 'Neque porro quisquam est qui dolorem ', writer: 'Fevzi Mümtaz' },
    { title: 'ipsum', contents: 'ipsum quia dolor sit amet, consectetur, adipisci velit...', writer: 'Minako Yamauchi' },
    { title: 'consectetur', contents: 'consectetur adipiscing elit. ', writer: 'Muhammed Ishida' },
    { title: 'Nulla', contents: 'Nulla turpis metus, laoreet nec massa non, ', writer: 'Mithat Suzuki' }
]

addPost = (cont, css) => {
    return new Promise((res, rej) => {
        news.push(cont)

        if (css) {
            res('The post was successful');
        } else {
            rej('Submission failed');
        }
    });
}

viewPost = (css) => {
    return new Promise((res, rej) => {
        news.map(ps => { console.log(`#${ps.title}\n    ${ps.contents}\n |${ps.writer} \n --------------------------------`) })
        if (css) {
            res('successful');
        } else {
            rej('failed');
        }
        console.log('###############################')
    });
}


async function pstAdd(tit, con, wri, css) {
    try{
        await addPost({ title: `${tit}`, contents: `${con}`, writer: `${wri}` }, css)
        viewPost(news)
    }catch (err){
        console.log(err)
    }
    
}
viewPost(true)
pstAdd('Title', 'Post', 'John Doe', true)

