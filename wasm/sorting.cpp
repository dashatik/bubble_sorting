#include <emscripten/bind.h>
#include <vector>

// Bubble Sort Function
std::vector<int> bubbleSort(std::vector<int> arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
    return arr;
}

// Binding
EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("bubbleSort", &bubbleSort);
}
