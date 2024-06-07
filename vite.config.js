import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default {
    base :'/responsive-webpages/',
    plugins: [handlebars({
        context : data 

    })]

};