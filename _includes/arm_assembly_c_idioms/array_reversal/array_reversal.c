#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    int num, *arr, i;
    scanf("%d", &num);
    arr = (int*) malloc(num * sizeof(int));
    for(i = 0; i < num; i++) {
        scanf("%d", arr + i);
    }

    int med = floor(num / 2);
    int max = num - 1;
    for (int j=0; j < med; j++){
        int tmp = arr[j];
        arr[j] = arr[max];
        arr[max] = tmp;
        max--;
    }



    for(i = 0; i < num; i++) {
        printf("%d ", *(arr + i));
    }

    free(arr);

    return 0;
}