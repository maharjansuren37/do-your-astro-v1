#README

## With or without asyncHandler
Source: https://stackoverflow.com/questions/56973265/what-does-express-async-handler-do

### With asyncHandler
    express.get('/', asyncHandler(async (req, res, next) => {
        const bar = await foo.findAll();
        res.send(bar)
    }))

### Without asyncHandler
    express.get('/',(req, res, next) => {
        foo.findAll()
    .then ( bar => {
       res.send(bar)
        } )
    .catch(next); // error passed on to the error handling route
    })

### Using async/await
    express.get('/', async (req, res, next) => {
    try {
        const bar = await foo.findAll();
        res.send(bar);
    } catch (err) {
        next(err); // error passed on to the error handling route
    }
    });