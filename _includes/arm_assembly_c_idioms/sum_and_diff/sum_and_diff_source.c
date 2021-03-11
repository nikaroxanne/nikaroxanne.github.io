
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int val1, val2;
    float val3, val4;
    scanf("%d %d\n", &val1, &val2);
    int sum1 = val1 + val2;
 

    scanf("%f %f\n", &val3, &val4);
    float sum2 = val3 + val4;

    int diff1= val1 - val2;
    float diff2= val3 - val4;

    printf("%d %d\n", sum1, diff1);
    printf("%0.1f %0.1f\n", sum2, diff2);

    return 0;
}
