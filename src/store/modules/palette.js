const state = {
    palettes: [
        {
            id:1,
            title:'Rainy Day',
            colors: {
                main: '#6366F1',
                primary:'#1E293B',
                secondary:'#B8BFC6',
                tertiary:'#FFFFFF'
            }
        },
        {
            id:2,
            title:'New School by Yaasir',
            colors: {
                main: '#8EC1D6',
                primary:'#475569',
                secondary:'#CBD5E1',
                tertiary:'#F8FAFC'
            }
        },
        {
            id:3,
            title:'Palette #03',
            colors: {
                main: '#FDA4AF',
                primary:'#1E293B',
                secondary:'#475569',
                tertiary:'#F8FAFC'
            }
        },
        {
            id:4,
            title:'Palette #04',
            colors: {
                main: '#F43F5E',
                primary:'#164E63',
                secondary:'#E5E7EB',
                tertiary:'#F1F5F9'
            }
        },
        {
            id:5,
            title:'Palette #05',
            colors: {
                main: '#EC4899',
                primary:'#073418',
                secondary:'#94A3B8',
                tertiary:'#F8FAFC'
            }
        },
        {
            id:6,
            title:'Palette #06',
            colors: {
                main: '#F43F5E',
                primary:'#334155',
                secondary:'#A2DBB7',
                tertiary:'#FFFDF5'
            }
        },
        {
            id:7,
            title:'Palette #07',
            colors: {
                main: '#9F1239',
                primary:'#1E293B',
                secondary:'#9CA3AF',
                tertiary:'#FFFFFF'
            }
        },
        {
            id:8,
            title:'Palette #08',
            colors: {
                main: '#FF5A5F',
                primary:'#334155',
                secondary:'#CBD5E1',
                tertiary:'#FFFFFF'
            }
        },
    ]
};

const getters = {
    allPalettes: (state) => state.palettes
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}