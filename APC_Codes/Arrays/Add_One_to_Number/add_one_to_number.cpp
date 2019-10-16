int* plusOne(int* A, int n1, int *length_of_array) {
      int itr = 0,length = n1,sum;
      int itr2, first =1;
      int debug = 0;
      int num_zero = 0;
      
      for(itr = n1-1; itr >= 0; itr--)
      {
          sum = A[itr] + carry;
          if(A[itr] == 0)
          {
              num_zero++;
          }
          else
          {
              num_zero = 0;
          }
          if(sum > 9)
          {
              carry = sum-9;
              A[itr] = 0;
          }
          else
          {
              carry = 0;
              A[itr] = sum;
          }

      }
      
      if(carry)
      {
        length = n1 + 1;    
      }
      if(num_zero == n1)
      {
          num_zero = n1-1;
      }
      length = length-num_zero;
      
      if(debug)
      {
          printf("Length %d carry %d", length,carry);
      }
      
      int *ret = (int*)malloc(sizeof(int)*length);
      itr = 0;
      if(carry)
      {
          ret[0] = 1;
          itr++;
      }
      for(itr2 = 0; itr2 < n1; itr2++)
      {
          if((A[itr2] ==  0) && first && (carry == 0))
          {
              continue;
          }
          else
          {
              first = 0;
          }
          ret[itr] = A[itr2];
          itr++;
      }
      *length_of_array = length;
      return ret;
}
