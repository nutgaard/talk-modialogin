function createSlides() {
    MathJax.Hub.Config({
        tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
    });

    MathJax.Hub.Configured();
    // setTimeout(() => { MathJax.Hub.Typeset(); }, 200);

    return remark.create({
        ratio: '16:9',
        highlightLanguage: 'tsx',
        highlightStyle: 'monokai',
        navigation: {
            scroll: false
        }
    });
}
