import model from './model'

async function start () {
  try {
    await model.run()
  } catch (err) {
    console.log(err)
  }
} 

start()