# What is Asynchronous JavaScript?

JavaScript normally runs single-threaded — meaning one task at a time.
If something takes a long time (e.g., fetching data from a server), it can block other tasks from running.

To avoid freezing the page, JavaScript uses asynchronous programming —
which means start a task, and when it’s done, you get notified (via a callback, promise, etc.) instead of waiting right there.



Real-Life Analogy
Imagine you go to a restaurant:

You place your order (start an async task).

The chef cooks your food in the kitchen (background work).

Meanwhile, you chat with friends or check your phone (other JS code runs).

When your food is ready, the waiter brings it to your table (callback / promise resolution).

If JavaScript was synchronous, you’d stand at the counter and do nothing until your food arrived — wasting time. 

Also , while your food is being prepared other persons can also order their food . You are not blocking the Queue