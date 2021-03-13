
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


