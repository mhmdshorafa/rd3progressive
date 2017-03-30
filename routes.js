module.exports = [
  {
    method:"GET",
    path:"/",
    handler:(req,res) => {
      res.file('./views/index.html')
    }
  },
  {
    method:"GET",
    path:"/assets/bundle.js",
    handler:(req,res) => {
      res.file('./dist/assets/bundle.js')
    }
  },  {
        method:"GET",
        path:"/service-worker.js",
        handler:(req,res) => {
          res.file('./service-worker.js')
        }
  }
]
