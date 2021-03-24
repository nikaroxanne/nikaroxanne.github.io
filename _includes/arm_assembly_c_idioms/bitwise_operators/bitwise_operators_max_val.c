
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

