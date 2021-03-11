
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int partition_new(int* arr, int low, int high){
    if (low >= high) {
        return low;
    }
    
    int left = low + 1;
    int right = high;

    int pivot_index = low;
    int final_index = left;
    int arr_pivot = arr[pivot_index];

    while (left < right){
        while((arr_pivot <= arr[right]) && (right > left)){
            right--;
        }
        while((arr_pivot > arr[left]) && (right > left)) {
            left++;
        }
        if ((arr_pivot <= arr[left]) && (arr_pivot > arr[right]) && ((left < right) && (left > pivot_index))) {
            int tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
        } 
        else{
            break;
        }
    }
    final_index = left;

    if (arr_pivot > arr[final_index]){
        int piv_tmp = arr[left];
        arr[left] = arr_pivot;
        arr[pivot_index] = piv_tmp;
        return final_index;
    } else{
        return pivot_index;
    }
}


void quicksort_nums(int* arr, int low, int high){
    if (low < high) {
        int partition_index = partition_new(arr, low, high);
        quicksort_nums(arr, low, partition_index - 1);
        quicksort_nums(arr, partition_index + 1, high);
    }
}

void PrintNLowestNumbers(int* arr, unsigned int length, unsigned short nLowest)
{
	int low = 0;
	int high = length - 1;
	quicksort_nums(arr, low, high);
	for(int i =0; i < nLowest; i++){
	       printf("%d ", arr[i]);
	}
	printf("\n");	
}

int main()
{
	unsigned int length;
	unsigned short nLowest;
	scanf("%hu %u", &nLowest, &length);
	int* integerList;
	integerList= (int*) malloc(length * sizeof(int));
	for (unsigned int i=0; i<length; i++){
		scanf("%d", integerList + i);
	}
	PrintNLowestNumbers(integerList, length, nLowest);
	free(integerList);
	return 0;
}
