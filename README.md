# pgwebacara12

Jalankan server lokal dari folder ini:

```powershell
python -m http.server 8000
```

Buka `http://localhost:8000`. GeoServer harus berjalan di `localhost:8080`.

Peta menggunakan workspace `pgweb`, MySQL store `kesehatan`, dan SQL view `fasilitas_kesehatan_geo` pada GeoServer. SQL view tersebut membaca `kesehatan.fasilitas_kesehatan` dan membentuk geometri Point dari `longitude`/`latitude` dengan SRID 4326, mengikuti pola di LAKER. Browser mengambil layer `pgweb:fasilitas_kesehatan_geo` melalui WMS; browser tidak terhubung langsung ke MySQL.

Jika layer tidak tampil, periksa `http://localhost:8080/geoserver/wms?service=WMS&request=GetCapabilities` dan pastikan `pgweb:fasilitas_kesehatan_geo` tercantum.
