1. Run the application by calling in separate terminals

```yarn start-backend```

````yarn start-app````

2. Go to ``chrome://inspect/#devices`` and inspect app.ts file
3. Go to memory tab in the inspector and run Allocation instrumentation on timeline
4. Go to ``http://localhost:1234`` in a browser - see the response from a gateway in a console.
5. Notice in Memory inspector, that some memory has been accumulated (approximately 9 kb)
6. Close browser page with port 1234. Notice that 1 additional kb has been accumulated and the previous memory hasn't been cleaned.
7. Repeat steps 4-6 a few more steps and notice that with each new client connection to Gateway there is some additional memory being stored and is not freed after the client disconnection.




