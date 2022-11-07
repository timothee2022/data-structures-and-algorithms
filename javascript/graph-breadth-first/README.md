# Challenge Summary

Write a method for the graph class:

* breath first
* arguments: node
* return: A collection of nodes in order they were visited
* display the collection

## Whiteboard Process

![Code Challenge 36](./Code%20Challenge%2036.PNG)

## Approach & Efficiency

* declare a method called breadth-first that take a node as argument and
return a collection of node in order they were visited;

* if the queue is empty, return false for visited node;
* traverse through the stack and enqueue a node that I visited;
* visit the  the neighbors(children) of the node and mark as visited enqueue;
* repeat the process while the queue is not empty.

## Solution

const bfs = (node) => {

   visited[node] = true;

   queue.equeue(node);

    while (!queue.isEmpty()) {

        let visiting = queue.dequeue();

        console.log(`we visited ${visiting}`)

        for (let j = 0; j < graphAdj[visiting].length; j++) {

           if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {

           visited[j] = true;

           queue.equeue(j);

          }

       }

     }

}
