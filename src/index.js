const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars') ;
const methodOverride = require('method-override') ;
const SortMiddleware = require('./app/middleware/SortMiddleware') ;
const cookieParser = require('cookie-parser')
const path = require('path') ;
const port = 3000;
const app = express();


const route = require('./routes')
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(express.static('public'))
app.use(methodOverride('_method'))
 // custum middleware
app.use(SortMiddleware)
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a , b) => a + b,
        sortable : (field , sort) =>{

            const   sortType = field === sort.column ? sort.type: 'default' ;

            const icons =  {
                default: 'oi oi-elevator',
                asc :'oi oi-sort-ascending',
                desc :'oi oi-sort-descending',
            };

            const types= {
                default: 'desc',
                asc:'desc',
                desc: 'asc'
            }
            

            const type = types[sortType]
            const icon = icons[sortType]

            return `<a href="?_sort&column=${field}&type=${type}">
            <span class="${icon}"></span>
          </a>`
        }
    }
}));

app.set('view engine', 'hbs');
app.set('views' , path.join(__dirname,'resources','views'))

route(app);


app.listen(port,()=>
    console.log(`App listening at http://localhost:${port}`))
