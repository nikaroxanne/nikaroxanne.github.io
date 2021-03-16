
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int and_val(int a, int b){
    return a&b;
}

int or_val(int a, int b){
    return a|b;
}

int xor_val(int a, int b){
    return a^b;
}

int max_val(int a, int n, int k, int curr_max, int(*bitwise_func)(int a, int b)){
    while (a < n) {
        int b = n;
        while (b > a) {
            int new_val = bitwise_func(a,b);
            curr_max = ((new_val < k) && (new_val > curr_max)) ? new_val : curr_max;
            b--;
        }
        a++;
    }
    return curr_max;
}


void calculate_the_maximum(int n, int k) {
    int new_and_max = max_val(1, n, k, 0, and_val);
    int new_or_max = max_val(1, n, k, 0, or_val);
    int new_xor_max = max_val(1, n, k, 0, xor_val);
    printf("%d \n", new_and_max);
    printf("%d \n", new_or_max);
    printf("%d \n", new_xor_max);
}


int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
 
    return 0;
}
