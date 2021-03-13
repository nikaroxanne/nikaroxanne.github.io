
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

