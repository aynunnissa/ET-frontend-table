function searchName(data, name) {
  // Buat string name menjadi lowercase agar pencarian tidak case-sensitive
  const nameLower = name.toLowerCase();

  // Algoritma Pencarian: Linear Search karena string di dalam array tidak terurut
  // Jika terurut, akan menggunakan Binary Search
  for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase().includes(nameLower)) {
      return `Nama "${name}" ditemukan pada index ${i}: "${data[i]}"`;
    }
  }

  // Jika tidak ditemukan
  return `Nama "${name}" tidak ditemukan.`;
}

const data = ['Danawi Liam', 'Tarjaya', 'Daruna', 'Warsoni', 'John Wick', 'Hadi PS', 'Derian Lekso'];

// Mencari nama
console.log(searchName(data, 'John Wick'));   // Output: Nama "John Wick" ditemukan pada index 4: "John Wick"
console.log(searchName(data, 'Liam'));        // Output: Nama "Liam" ditemukan pada index 0: "Danawi Liam
console.log(searchName(data, 'Michael'));     // Output: Nama "Michael" tidak ditemukan.