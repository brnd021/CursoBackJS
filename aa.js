const test = { 
    prop : 42,
    func: () => {
        return this.prop;
    },
};

console.log(test.func);

//https://x.com/coproduto/status/1992974497888997441?s=20