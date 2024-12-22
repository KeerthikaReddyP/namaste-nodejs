// 5 steps of require


/*
    1. Resolving the module (checking whether the path is local, json, or util)(js file or json file or util or folder..)
    2. Loading the module (file content is loaded according to the file type)
    3. Wrapping it inside an IIFE
    4. Code Evalueation (module.exports)
    5. Caching (module is cached, so that it won't run all these 5 steps again and again, when required by multiple modules)
        (It just returns from cache) (Efficient) (doesn't slow down)
*/