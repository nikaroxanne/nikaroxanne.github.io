
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

