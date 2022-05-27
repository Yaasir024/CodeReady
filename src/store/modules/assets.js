const state = {
    assets: [
        {
            id:1,
            name:'Anime blog Template',
            details:'Anime website made by the great Falana Yaasir the Super Coder',
            category:'Template',
            tags:['html','css']
        },
    ]
};

const getters = {
    allAssets: (state) => state.assets
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}