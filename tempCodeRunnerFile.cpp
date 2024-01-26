#include <iostream>
#include <stack>
using namespace std;

int main() {
    int n;
    cin >> n;

    int stockprice[n];
    for (int i = 0; i < n; i++) {
        cin >> stockprice[i];
    }

    int span[n];
    for (int i = 0; i < n; i++) {
        span[i] = 1;
    }

    stack<int> s1;
    s1.push(0);

    for (int i = 1; i < n; i++) {
        while (!s1.empty() && stockprice[s1.top()] < stockprice[i]) {
            s1.pop();
        }

        if (s1.empty()) {
            span[i] = i + 1;
        } else {
            span[i] = i - s1.top();
        }

        s1.push(i);
    }

    for (int i = 0; i < n; i++) {
        cout << span[i] << " ";
    }

    cout << endl;
    return 0;
}
