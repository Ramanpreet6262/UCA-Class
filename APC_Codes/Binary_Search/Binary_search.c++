#include <iostream>
using namespace std;

int binary_search(int a[], int l, int r, int no)
{
    while(l<=r)
    {
        int mid = (l + r) / 2;

        if(a[mid] < no)
        {
            l = mid + 1;
        }
        
        else if(a[mid] > no)
        {
            r = mid - 1;
        }

        else 
        {
            return mid;
        }
    }
    return -1;
}

int main() 
{
    int n, no;
    cout<<"Enter no. of elements"<< endl;
    cin>>n;
    cout<<"Enter the no. to search"<< endl;
    cin>>no;
    int arr[n];
    cout<<"Enter no's"<< endl;
    for(int i=0; i<n; i++)
    {
        cin>>arr[i];
    }

    int result = binary_search(arr, 0, n-1, no);

    if(result == -1)
    {
        cout << "Element is not present in array" << endl;
    }

    else
    {
        cout << "Element is present at index " << result << endl;
    }

    return 0;
}