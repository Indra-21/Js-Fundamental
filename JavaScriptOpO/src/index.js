import { TableHead } from "./tabelHeader";
import { TableBod } from "./tabelBody";
import { Table } from "./table";

// createHeader();

const tes = new Table ({
  columns: ["Nama", "Alamat", "JK", "Pengajar", "Kelas"],
  data: [
    ["Indra Saputra", "Jakarta Pusat", "Laki-laki", "Aldo", "MERN"],
    ["Miftah", "Pekalongan", "Laki-laki", "Aldo", "MERN"],
    ["Gama", "Bandung", "Laki-laki", "Aldo", "MERN"],
    ["Susi", "Jakarta Pusat", "Wanita", "Pelita", "Laravel"],
  ]
});
const app = document.getElementById("app");
tes.render(app);


  