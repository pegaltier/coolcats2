// This test file uses the tape testing framework.
// To learn more, go here: https://github.com/substack/tape
const test = require('tape');
const Container = require('@holochain/holochain-nodejs');

// instantiate an app from the DNA JSON bundle
const app = Container.instanceFromNameAndDna("app", "dist/bundle.json")

// activate the new instance
app.start()

function display(result) {
  process.stdout.write(" ".repeat(2))
  console.log(result)
  process.stdout.write(" ".repeat(4))
}

const Agent_Address = app.call("coolcats", "main", "app_property", {
  name: "Agent_Address"
}).value;

test("Handles tests", (t) => { t.end() })

test("If there is no handle set returns ''", (t) => {
  const result = app.call("coolcats", "main", "get_handle", {
    address: Agent_Address
  })
  display(result)
  t.equal(result.value, "")
  t.end()
})

test("We can create a new handle", (t) => {
  const result = app.call("coolcats", "main", "use_handle", {
    handle: "buffaloBill"
  })
  display(result)
  t.equal(result.value, "QmdG4gpbEbcsK15ophm46DaAqS8j2uaTUe5qHH88Ygkbka")
  t.end()
})

test("We can retrieve the new handle", (t) => {
  const result = app.call("coolcats", "main", "get_handle", {
    address: Agent_Address
  })
  display(result)
  t.equal(result.value, "buffaloBill")
  t.end()
})

test("Trying to use a handle that another person is using returns 'handle_in_use'", (t) => {
  const result = app.call("coolcats", "main", "use_handle", {
    handle: "buffaloBill"
  })
  display(result)
  t.equal(result.error.ValidationFailed, "handle_in_use")
  t.end()
})