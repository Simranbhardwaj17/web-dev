//L-6
//D-09/12/24

Virtual DOM, fibre & reconciliation


Now virtual dom not used in react


//CreateRoot mthd create dom like structure BTS

//Browser dom strt from initial(webstruc prep)

//read doc "react-fibre-architecture" github link


//React fibre
react use fibre to update virtual dom
-> features:
   ability to pause, abort, or reuse work as new updates


//reconciliation
2 tree r react tree(createRoot) & actual browser tree(DOM)
react is known as virtual dom & algorithm behind virt dom is reconciliation

in jsx u create tree this tre is then flushed to rendering environment by (.render)
tree is changed/ app is updated (via setState), a new tree is generated. The new tree is diffed ......

If already work is done in app then from starting again re-render or virtual dom to dom then why to reinvent work of dom
For selectively some parts operation grt optimized. so, react(virtual dom) come in frame

BTS virt dom is called as recon.


Fiber is a ground-up rewrite of the reconciler
Fiber is a latest approach


key points:--
-> Diffing of lists is performed using keys. Keys should be .....



key points r:--

How createRoot root

At time of writing react code work go to virtual DOM thats how differentiating algo diffing, how dom update

Core architecture u can learn by your own