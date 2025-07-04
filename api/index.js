<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />

    <title>CRUD data mahasiswa</title>
  </head>
  <body>
    <!-- Opener Content -->
    <div class="container py-4">
      <header>
        <h1>Selamat datang!</h1>
      </header>
      <div>
        <p>
          Web ini melakukan operasi <b>CRUD</b> ( Create, Read, Update, Delete )
          untuk data mahasiswa.
        </p>
      </div>
    </div>

    <!-- Section CRUD -->
    <section class="bg-white">
      <div class="container">
        <!-- CRUD -->
        <div id="crud" class="py-5">
          <!-- Catatan -->
          <p class="text-muted text-justify m-0">
            note: data yang Anda buat tidak akan disimpan, jika Anda merefresh
            situs web ini data akan otomatis terhapus.
          </p>

          <!-- Menu CRUD -->
          <div class="card mb-4">
            <div class="card-body">
              <!-- Title -->
              <h3 class="card-title text-center">CRUD MAHASISWA</h3>

              <!-- List Button CRUD -->
              <div class="row row-cols-2 row-cols-md-4 text-center">
                <!-- Button Create -->
                <div class="col p-2">
                  <p
                    class="card-text btn btn-primary"
                    onclick="create(dataStore)"
                  >
                    Create Data
                  </p>
                </div>

                <!-- Button Read -->
                <div class="col p-2">
                  <p class="card-text btn btn-light" onclick="read(dataStore)">
                    Read Data
                  </p>
                </div>

                <!-- Button Update -->
                <div class="col p-2">
                  <p
                    class="card-text btn btn-success"
                    onclick="updated(dataStore)"
                  >
                    Update Data
                  </p>
                </div>

                <!-- Button Delete -->
                <div class="col p-2">
                  <p
                    class="card-text btn btn-danger"
                    onclick="deleted(dataStore)"
                  >
                    Delete Data
                  </p>
                </div>
              </div>
              <!-- Akhir List Button CRUD -->
            </div>
          </div>

          <!-- ALERT WARNING -->
          <div
            id="a-warning"
            class="alert hide alert-warning py-3"
            role="alert"
          ></div>

          <!-- ALERT SUCCESS -->
          <div
            id="a-success"
            class="alert hide alert-success py-3"
            role="alert"
          ></div>

          <!-- Table Data -->
          <div class="pt-3" id="section-table">
            <h3 class="text-center">Data Mahasiswa</h3>
            <div class="table-responsive">
              <!-- Table -->
              <table class="table table-striped table-hover">
                <!-- Caption untuk update dan delete -->
                <caption
                  id="caption-table"
                  class="h3 text-center text-muted"
                ></caption>

                <!-- Head Table -->
                <thead class="thead-light">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Npm</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Universitas</th>
                    <th scope="col">Jurusan</th>
                    <th scope="col">Ipk</th>
                  </tr>
                </thead>
                <!-- Akhir Head Table -->

                <!-- Body Table -->
                <tbody></tbody>
                <!-- Akhir Body Table -->
              </table>
              <!-- Akhir Table -->
            </div>
          </div>
          <!-- Akhir Table Data -->

          <!-- Form create dan update data -->
          <form class="hide py-5" id="form">
            <!-- Title Form -->
            <div class="mb-3">
              <h4 id="title-form" class="text-center"></h4>
            </div>

            <!-- Field NPM type angka -->
            <div class="form-group row">
              <label for="npm" class="col-sm-2 col-form-label">Npm</label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="npm"
                  name="npm"
                  placeholder="Masukan NPM"
                />
              </div>
            </div>

            <!-- Field NAME type text -->
            <div class="form-group row">
              <label for="name" class="col-sm-2 col-form-label">Nama</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="nama"
                  placeholder="Masukan Nama"
                />
              </div>
            </div>

            <!-- Field EMAIL type email -->
            <div class="form-group row">
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Masukan Email"
                />
              </div>
            </div>

            <!-- Field UNIVERSITAS type text -->
            <div class="form-group row">
              <label for="universitas" class="col-sm-2 col-form-label"
                >Universitas</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="universitas"
                  name="universitas"
                  placeholder="Masukan Nama Universitas"
                />
              </div>
            </div>

            <!-- Field JURUSAN type text -->
            <div class="form-group row">
              <label for="jurusan" class="col-sm-2 col-form-label"
                >Jurusan</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="jurusan"
                  name="jurusan"
                  placeholder="Masukan Nama Jurusan"
                />
              </div>
            </div>

            <!-- Field IPK type angka -->
            <div class="form-group row">
              <label for="ipk" class="col-sm-2 col-form-label">Ipk</label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="ipk"
                  name="ipk"
                  placeholder="Masukan IPK"
                  step="any"
                />
              </div>
            </div>

            <!-- Button submit -->
            <div class="form-group">
              <div class="">
                <button
                  type="button"
                  id="btn_cu"
                  class="btn btn-primary"
                ></button>
              </div>
            </div>
          </form>
          <!-- Akhir Form create dan update data -->
        </div>
      </div>
    </section>

    <!-- Tools, Author, Source code -->
    <div class="container py-3">
      <div class="row">
        <!-- Tools -->
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <h3>Tools</h3>
          <div>
            <ul class="list-group rounded">
              <li class="list-group-item">Html5</li>
              <li class="list-group-item">Css3</li>
              <li class="list-group-item">JavaScript</li>
              <li class="list-group-item">Bootstrap v4.0</li>
            </ul>
          </div>
        </div>

        <!-- Author -->
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <h3>Author</h3>
          <ul class="list-group rounded">
            <li class="list-group-item">
              <a href="https://github.com/yogadwiprasetyo" target="_blank"
                >Yoga</a
              >
            </li>
            <li class="list-group-item">
              <a href="https://github.com/bentarraharja" target="_blank"
                >BentarRaharja</a
              >
            </li>
          </ul>
        </div>

        <!-- Source code -->
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <h3>Source Code</h3>
          <ul class="list-group rounded">
            <li class="list-group-item">
              <a
                href="https://github.com/himti-divisi-iptek/himti-divisi-iptek.github.io/tree/main/sistem-cerdas-crud"
                target="_blank"
                >github/forum-studi-sistem-cerdas</a
              >
            </li>
            <li class="list-group-item">
              <a href="https://github.com/himti-divisi-iptek" target="_blank"
                >github/himti-divisi-iptek</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Operation CRUD -->
    <script src="./operationCRUD.js"></script>
  </body>
</html>