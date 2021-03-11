
#include <stdio.h>
#include <string.h>
#include <math.h>


int max_and(int a, int n, int k, int curr_max) {
    int b = a + 1;
    while ((a < b) && (b <= n)) {
        while (b <= n) {
            int new_and = a&b;
            if ((new_and < k) && (new_and > curr_max)){
                curr_max = new_and;
            }
            b++;
        }
        a++;
        b = a + 1;
    }
    return curr_max;
}

int max_or(int a, int n, int k, int curr_max_or) {
    int b = a + 1;
    while ((a < b) && (b <= n)) {
        while (b <= n){
            int new_or = a|b;
            if ((new_or < k) && (new_or > curr_max_or)){
                curr_max_or = new_or;
            }
            b++;
        }
        a++;
        b = a + 1;
    }
    return curr_max_or;
}

int max_xor(int a, int n, int k, int curr_max_xor) {
    int b = a + 1;
    while ((a < b) && (b <= n)) {
        while (b <= n) {
            int new_xor = a^b;
            if ((new_xor < k) && (new_xor > curr_max_xor)){
                curr_max_xor = new_xor;
            }
            b++;
        }
        a++;
        b = a + 1;
    }
    return curr_max_xor;
}



void calculate_the_maximum(int n, int k) {
    int new_and_max = max_and(1, n, k, 0);
    int new_or_max = max_or(1, n, k, 0);
    int new_xor_max = max_xor(1, n, k, 0);
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
