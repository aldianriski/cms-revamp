<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 mb-1 text-primary font-weight-bold">Hero Candidates - Profile - Andi Suhendi</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b-row>
        <b-col>
          <h6>
            <router-link class="text-dark" :to="{name: 'pxHero'}">
              <i class="fas fa-arrow-left mr-1"></i>Back
            </router-link>
          </h6>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="8">
          <div v-for="data in items.data_pelamar" :key="data">
            <b-row>
              <b-col class="text-left" md="4">
                <h4 class="font-weight-bold">Data Pelamar</h4>
                <br />
              </b-col>
              <b-col md="8">
                <h4 class="font-weight-bold">&nbsp;</h4>
              </b-col>
              <b-col class="text-left" md="4">
                <p>Nama Lengkap</p>
              </b-col>
              <b-col md="8">{{data.nama_lengkap}}</b-col>
              <b-col class="text-left" md="4">
                <p>Jenis Kelamin</p>
              </b-col>
              <b-col md="8">{{data.jenis_kelamin}}</b-col>
              <b-col class="text-left" md="4">
                <p>Nomor KTP</p>
              </b-col>
              <b-col md="8">{{data.nomor_ktp}}</b-col>
              <b-col class="text-left" md="4">
                <p>Tempat Lahir</p>
              </b-col>
              <b-col md="8">{{data.tempat_lahir}}</b-col>
              <b-col class="text-left" md="4">
                <p>Tanggal Lahir</p>
              </b-col>
              <b-col md="8">{{data.tanggal_lahir}}</b-col>
              <b-col class="text-left" md="4">
                <p>Usia</p>
              </b-col>
              <b-col md="8">{{data.usia}}</b-col>
              <b-col class="text-left" md="4">
                <p>Agama</p>
              </b-col>
              <b-col md="8">{{data.agama}}</b-col>
              <b-col class="text-left" md="4">
                <p>NPWP</p>
              </b-col>
              <b-col md="8">{{data.npwp}}</b-col>
              <b-col class="text-left" md="4">
                <p>Alamat Identitas</p>
              </b-col>
              <b-col md="8">{{data.alamat_identitas}}</b-col>
              <b-col class="text-left" md="4">
                <p>Alamat Domisili</p>
              </b-col>
              <b-col md="8">{{data.alamat_domisili}}</b-col>
              <b-col class="text-left" md="4">
                <p>Penempatan Utama</p>
              </b-col>
              <b-col md="8">{{data.penempatan_utama}}</b-col>
              <b-col class="text-left" md="4">
                <p>Penempatan Alternatif</p>
              </b-col>
              <b-col md="8">{{data.penempatan_alternatif}}</b-col>
              <b-col class="text-left" md="4">
                <p>Nomor Telepon</p>
              </b-col>
              <b-col md="8">{{data.nomor_telepon}}</b-col>
              <b-col class="text-left" md="4">
                <p>Alamat Email</p>
              </b-col>
              <b-col md="8">{{data.alamat_email}}</b-col>
              <b-col class="text-left" md="4">
                <p>Nomor SIM C</p>
              </b-col>
              <b-col md="8">{{data.nomor_sim_c}}</b-col>
              <b-col class="text-left" md="4">
                <p>Masa Berlaku SIM C</p>
              </b-col>
              <b-col md="8">{{data.masa_berlaku_sim_c}}</b-col>
              <b-col class="text-left" md="4">
                <p>Pendidikan Terakhir</p>
              </b-col>
              <b-col md="8">{{data.pendidikan_terakhir}}</b-col>
              <b-col class="text-left" md="4">
                <p>Jurusan Pendidikan</p>
              </b-col>
              <b-col md="8">{{data.jurusan_pendidikan}}</b-col>
              <b-col class="text-left" md="4">
                <p>Institusi Pendidikan</p>
              </b-col>
              <b-col md="8">{{data.institusi_pendidikan}}</b-col>
              <b-col class="text-left" md="4">
                <p>Kendaraan Motor yang Digunakan</p>
              </b-col>
              <b-col md="8">{{data.kendaraan_motor_yang_digunakan}}</b-col>
              <b-col class="text-left" md="4">
                <p>Handphone dan Versi OS yang Digunakan</p>
              </b-col>
              <b-col md="8">{{data.handphone_dan_versi_os_yang_digunakan}}</b-col>
            </b-row>
          </div>
          <h4 class="mt-5 font-weight-bold">Riwayat Pribadi</h4>
          <br />
          <div v-for="riwayat in items.riwayat_pribadi" :key="riwayat">
            <b-row>
              <b-col class="text-left" md="4">
                <p>Asma</p>
              </b-col>
              <b-col md="8">{{riwayat.asma}}</b-col>
              <b-col class="text-left" md="4">
                <p>Diabetes</p>
              </b-col>
              <b-col md="8">{{riwayat.diabetes}}</b-col>
              <b-col class="text-left" md="4">
                <p>Epilepsi</p>
              </b-col>
              <b-col md="8">{{riwayat.epilepsi}}</b-col>
              <b-col class="text-left" md="4">
                <p>TBC</p>
              </b-col>
              <b-col md="8">{{riwayat.tbc}}</b-col>
              <b-col class="text-left" md="4">
                <p>Tifus</p>
              </b-col>
              <b-col md="8">{{riwayat.tifus}}</b-col>
              <b-col class="text-left" md="4">
                <p>Bersedia menjalani tes narkoba?</p>
              </b-col>
              <b-col md="8">{{riwayat.bersedia_menjalani_tes_narkoba}}</b-col>
              <b-col class="text-left" md="4">
                <p>Siap ditempatkan di mana saja?</p>
              </b-col>
              <b-col md="8">{{riwayat.siap_ditempatkan_dimana_saja}}</b-col>
              <b-col class="text-left" md="4">
                <p>Bersedia melamar dengan status Mitra?</p>
              </b-col>
              <b-col md="8">{{riwayat.bersedia_melamar_dengan_status_mitra}}</b-col>
              <b-col class="text-left" md="4">
                <p>Kenapa melamar posisi ini?</p>
              </b-col>
              <b-col md="8">{{riwayat.kenapa_melamar_posisi_ini}}</b-col>
              <b-col class="text-left" md="4">
                <p>Risiko terbesar pekerjaan ini?</p>
              </b-col>
              <b-col md="8">{{riwayat.resiko_terbersar_pekerjaa_ini}}</b-col>
              <b-col class="text-left" md="4">
                <p>Lebih menyukai rekan kerja yang seperti apa?</p>
              </b-col>
              <b-col md="8">{{riwayat.lebih_menyukai_rekan_kerja_yang_seperti_apa}}</b-col>
              <b-col class="text-left" md="4">
                <p>Dari mana informasi online test ini?</p>
              </b-col>
              <b-col md="8">{{riwayat.dari_mana_informasi_online_test_ini}}</b-col>
            </b-row>
          </div>
          <h4 class="mt-5 font-weight-bold">Seleksi Tahap 1</h4>
          <div v-for="seleksi in items.seleksi_tahap_1" :key="seleksi">
            <b-row>
              <b-col class="text-left" md="12">
                <p class="text-gray-500">{{seleksi.pertanyaan}}</p>
              </b-col>
              <b-col md="12">
                <p>{{seleksi.jawaban}}</p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col md="4">
          <b-card bg-variant="light" class="text-left">
            <b-row>
              <b-col md="12">
                <b-form-group id="fieldset-1" label="Status" class="mb-0" label-for="input-1">
                  <b-form-select
                    v-model="items.status"
                    class="my-0"
                    :class="items.status === 'Baru' ? 'text-warning':'' || items.status === 'Ditolak' ? 'text-danger':''|| items.status === 'Buffer' ? 'text-info':''|| items.status === 'Diterima' ? 'text-primary':'' "
                    id="input-1"
                  >
                    <option value="Baru" class="text-warning">Baru</option>
                    <option value="Ditolak" class="text-danger">Ditolak</option>
                    <option value="Buffer" class="text-info">Buffer</option>
                    <option value="Diterima" class="text-primary">Diterima</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <br />
                <b>Applied Date</b>
                <p>5 Des 2018</p>
              </b-col>
            </b-row>
          </b-card>
          <br />
          <p>
            <b-button block variant="primary">
              <i class="fas fa-save"></i> Save Change
            </b-button>
          </p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
// import dataService from "../dataService";

export default {
  data() {
    return {
      items: {
        status: "Baru",
        data_pelamar: [
          {
            nama_lengkap: "Andi Suhendi",
            jenis_kelamin: "Laki-laki",
            nomor_ktp: "324327180519890001",
            tempat_lahir: "Jakarta",
            tanggal_lahir: "18/05/1989",
            usia: "30",
            agama: "Islam",
            npwp: "401.928-2828311",
            alamat_identitas: "Jalan Pagarsih no 8, Bandung",
            alamat_domisili: "-",
            penempatan_utama: "Bandung",
            penempatan_alternatif: "-",
            nomor_telepon: "+62 81262641922",
            alamat_email: "andis@gmail.com",
            nomor_sim_c: "616519233190192",
            masa_berlaku_sim_c: "18/05/2020",
            pendidikan_terakhir: "SMA / MTs / Sederajat",
            jurusan_pendidikan: "IPA",
            institusi_pendidikan: "SMA 20 Bandung",
            kendaraan_motor_yang_digunakan: "Honda Beat 125cc tahun 2015",
            handphone_dan_versi_os_yang_digunakan:
              "Asus Max Pro M1, Android 8.0 Oreo"
          }
        ],
        riwayat_pribadi: [
          {
            asma: "Pernah",
            diabetes: "Tidak Pernah",
            epilepsi: "Tidak Pernah",
            tbc: "Tidak Pernah",
            tifus: "Pernah",
            bersedia_menjalani_tes_narkoba: "Ya, saya bersedia",
            siap_ditempatkan_dimana_saja:
              "Saya hanya bersedia ditempatkan di wilayah domisili tempat tinggal",
            bersedia_melamar_dengan_status_mitra: "Saya Bersedia",
            kenapa_melamar_posisi_ini:
              "Ketertarikan yang besar atas posisi ini",
            resiko_terbersar_pekerjaa_ini: "Lakalantas, Barang hilang",
            lebih_menyukai_rekan_kerja_yang_seperti_apa: "Kooperatif",
            dari_mana_informasi_online_test_ini: "Whatsapp Group"
          }
        ],
        seleksi_tahap_1: [
          {
            pertanyaan:
              "Heri adalah seorang anak tunggal yang belum mempunyai penghasilan. Dia sudah melamar ke beberapa perusahaan dalam rentang dua bulan terakhir namun belum ada yang menerimanya sebagai pekerja. Ayahnya merupakan pensiunan yang sudah berumur 65 tahun dan ibunya bekerja menitipkan gorengan dari warung ke warung dengan penghasilan yang tidak seberapa. Heri memiliki seorang anak bernama Putri yang sedang dirawat di rumah sakit dan membutuhkan biaya sedikitnya Rp15.000.000,- untuk dibayarkan 2 hari ke depan. Jika belum dilakukan pembayaran, maka Putri akan di pulangkan dari rumah sakit. Putri sedang dalam kondisi koma saat ini. Suatu hari Heri menemukan tas di jalan, ternyata isinya berupa dompet pemilik dan uang Rp18.000.000,-  Jika kamu sebagai Heri, apa yang akan kamu lakukan dengan uang itu dan mengapa?",
            jawaban:
              "Saya akan kembalikan tas tersebut kepada pemiliknya karena jelas bukan milik saya. Untuk pengobatan anak saya, saya siap menerima resiko Putri dipulangkan ke rumah dalam kondisi koma sembari berupaya membayar tagihan rumah sakit dengan narik ojek online setiap hari"
          },
          {
            pertanyaan:
              "Jelaskan bagaimana upaya terbesar kamu dalam berusaha membiayai pengobatan Putri, anak semata wayang.",
            jawaban:
              "Saya akan berusaha semaksimal mungkin dan saya akan mencoba mencari uang yang halal untuk keluarga saya walaupun saya harus meminjam dengan orang-orang sekitar dan lainnya"
          },
          {
            pertanyaan:
              "Setelah sekian banyak melamar pekerjaan dan menunggu sebulan lamanya, suatu hari Heri mendapatkan panggilan pekerjaan dari salah satu perusahaan dan ditawari pekerjaan yang berlokasi jauh dari rumahnya. Pekerjaan ini berjarak 40 km dari rumah dan melewati sekitar 3 kali kemacetan lalu lintas. Kondisinya, Heri membutuhkan penghasilan untuk berobat dan membayar hutang ke beberapa orang. Jika kamu sebagai Heri, apakah kamu akan ambil tawaran pekerjaan tersebut? Mengapa?",
            jawaban:
              "Saya akan ambil pekerjaan tersebut walaupun lokasinya jauh karena saya menyadari kondisi anak saya yang sedang membutuhkan biaya pengobatan. Saya berusaha maksimal asalkan bisa memiliki pekerjaan tetap sehingga saya  bisa membiayai pengobatan anak saya, juga untuk mencicil hutang kepada orang lain."
          }
        ]
      },
      modalShow: false,
      commentShow: false,
      selected: null
    };
  }
  // mounted() {
  //   dataService
  //     .getReport()
  //     .then(response => {
  //       this.items = response.data.data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.errored = true;
  //     })
  //     .finally(() => (this.loading = false));
  // }
};
</script>

<style>
</style>
