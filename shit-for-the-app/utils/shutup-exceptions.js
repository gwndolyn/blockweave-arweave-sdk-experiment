export default class Helper {
  constructor() { }

  tryToStringAnything(theFuckingDataToParse) {
    try {
      return `${theFuckingDataToParse}`
    } catch (error) {
      return { "caughtError": `${error}` }
    }
    // throw "tryToStringAnything fucking failed for some unforseeable(its only unforseeable because I am that stupid) reason. Even though it has a try-catch block before throwing this shit";
  }
}
