
/*
* n_lowest_nums takes as input:
*	1. an unsigned int (length) - the length of a list
*	2. an unsigned short int (nLowest) - the n lowest numbers to choose from that list
*	3. a list of signed integers (integerList)
*
* n_lowest_nums then calls PrintLowestNumbers
*
* PrintLowestNumbers takes as input
*	1. an array of integers
*	2. an unsigned int (length)
*	3. an unsigned short int (nLowest)
* Print LowestNumbers calls quicksort, to sort integerList in ascending order
* PrintLowestNumbers then prints the values in the sorted array at indices [0,n)
*
* quicksort_nums is an implementation of the Quicksort sorting algorithm,
* an in-place sorting algorithm that uses an in-place divide-and-conquer strategy to sort an array 
* in O(nlogn) time and O(log n) space
*
*/

