<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800 font-weight-bold">Customer Empathy</h5>
      <p class="mb-4">Paxel | Customer Excellence | Tickets | Claim</p>
    </div>
    <b-card class="text-left">
      <b-row>
        <b-col>
          <h6>
            <router-link :to="{name: 'cxReport'}">
              <i class="fas fa-arrow-left mr-1"></i>Back
            </router-link>
          </h6>
        </b-col>
      </b-row>
      <br />
      <div v-if="loading" class="d-flex justify-content-center mb-3">
        <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
      </div>
      <b-row v-else>
        <b-col md="8">
          <b-row>
            <b-col class="text-left" md="6">
              <b>No. AWB:</b>
              <p>{{items.ticket_no}}</p>
              <br />
              <b>No Akun :</b>
              <p>{{items.no_akun}}</p>
            </b-col>
            <b-col md="3">
              <b>Tanggal Delivery :</b>
              <p>{{items.delivery_date}}</p>
              <br />
              <b>Nama Perusahaan :</b>
              <p>{{items.company_name}}</p>
            </b-col>
            <b-col md="3">
              <b>Tanggal Pickup :</b>
              <p>{{items.pickup_date}}</p>
              <br />
            </b-col>
          </b-row>
          <br />
          <h4>
            <b>Yang Mengajukan Claim</b>
          </h4>
          <br />
          <b-row>
            <b-col class="text-left" md="4">
              <b>Nama :</b>
              <p>{{items.name}}</p>
              <br />
              <b>No. Telepon/HP :</b>
              <p>{{items.contact}}</p>
              <br />
              <b>Nama Pengirim :</b>
              <p>{{items.name_sender}}</p>
              <br />
              <b>Nama Penerima :</b>
              <p>{{items.name_receiver}}</p>
            </b-col>
            <b-col md="4">
              <b>Sebagai :</b>
              <p>{{items.as}}</p>
              <br />
              <b>Email :</b>
              <p>{{items.email}}</p>
              <br />
              <b>Alamat Pengirim :</b>
              <p>{{items.address_sender}}</p>
              <br />
              <b>Alamat Penerima :</b>
              <p>{{items.address_receiver}}</p>
            </b-col>
            <b-col md="4">
              <b>&nbsp;</b>
              <p>&nbsp;</p>
              <br />
              <b>&nbsp;</b>
              <p>&nbsp;</p>
              <br />
              <b>Kota :</b>
              <p>{{items.city_sender}}</p>
              <br />
              <b>Kota :</b>
              <p>{{items.city_receiver}}</p>
            </b-col>
          </b-row>
          <br />
          <h4>
            <b>Informasi Mengenai Claim</b>
          </h4>
          <br />
          <b-row>
            <b-col>
              <b>Alasan Claim :</b>
              <li v-for="item in items.reason_claim" :key="item">{{item}}</li>
              <br />
              <b>Apakah paket dikirim dengan asuransi tambahan?</b>
              <p>{{items.is_insurance}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-row>
                <b-col>
                  <b>Jumlah Claim Barang</b>
                  <p>{{items.claim_total}}</p>
                </b-col>
                <b-col>
                  <b>Besaran Claim</b>
                  <p>Rp. {{items.claim_price}}</p>
                </b-col>
                <b-col>
                  <b>Total Claim</b>
                  <p>Rp. {{items.claim_price_total}}</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b>Pesan :</b>
              <p>{{items.message}}</p>
            </b-col>
          </b-row>
          <br />
          <h4>
            <b>Dokumen Pendukung</b>
          </h4>
          <br />
          <b-row>
            <b-col>
              <b>Bukti Foto :</b>
              <b-card class="mt-3 mb-3">
                <card-body>
                  <b-row>
                    <b-col>
                      <i class="fas fa-file-image pr-3"></i>
                      <b>{{items.image}} .jpg</b>
                      <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                    </b-col>
                    <b-col class="text-right" align="right">
                      <b-button v-b-modal.modal-image1 variant="primary" class="ml-5">Preview</b-button>
                    </b-col>
                  </b-row>
                </card-body>
              </b-card>
              <b>Invoice Pembelian Barang :</b>
              <b-card class="mt-3 mb-3">
                <card-body>
                  <b-row>
                    <b-col>
                      <i class="fas fa-file-image pr-3"></i>
                      <b>{{items.image_invoice}} .jpg</b>
                      <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                    </b-col>
                    <b-col class="text-right" align="right">
                      <b-button v-b-modal.modal-image2 variant="primary" class="ml-5">Preview</b-button>
                    </b-col>
                  </b-row>
                </card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4">
          <p>
            <b-button block variant="primary">
              <i class="fas fa-print"></i> Print Claim
            </b-button>
          </p>
          <b-card bg-variant="light" class="text-left">
            <b-row>
              <b-col md="8">
                <b>Status</b>
                <p>
                  <b-button
                    class="px-5"
                    v-if="items.status == 'rejected'"
                    variant="danger"
                    size="sm"
                  >Rejected</b-button>
                  <b-button
                    class="px-5"
                    v-else-if="items.status == 'new'"
                    variant="warning"
                    size="sm"
                  >New</b-button>
                  <b-button
                    class="px-5"
                    v-else-if="items.status == 'on_review'"
                    variant="info"
                    size="sm"
                  >On Review</b-button>
                  <b-button
                    class="px-5"
                    v-else-if="items.status == 'resolved'"
                    variant="success"
                    size="sm"
                  >Resolved</b-button>
                </p>
              </b-col>
              <b-col align="right">
                <b>&nbsp;</b>
                <p>
                  <b-dropdown text="Change" size="sm">
                    <b-dropdown-item
                      :active="this.items.status == 'new'"
                      @click="changeStatus('new')"
                      href="#"
                    >
                      <b-button block variant="warning">New</b-button>
                    </b-dropdown-item>
                    <b-dropdown-item
                      :active="this.items.status == 'rejected'"
                      @click="changeStatus('rejected')"
                      href="#"
                    >
                      <b-button block variant="danger">Rejected</b-button>
                    </b-dropdown-item>
                    <b-dropdown-item
                      :active="this.items.status == 'on_review'"
                      @click="changeStatus('on_review')"
                      href="#"
                    >
                      <b-button block variant="info">On Review</b-button>
                    </b-dropdown-item>
                    <b-dropdown-item
                      :active="this.items.status == 'resolved'"
                      @click="changeStatus('resolved')"
                      href="#"
                    >
                      <b-button block variant="success">Resolved</b-button>
                    </b-dropdown-item>
                  </b-dropdown>
                </p>
              </b-col>
              <b-col md="8">
                <br />
                <b>Ticket No :</b>
                <p>{{items.ticket_no}}</p>
                <br />
                <b>Time Issued</b>
                <p>{{items.time_issued}}</p>
              </b-col>
              <b-col md="4" class="text-right">
                <br />
                <b>Type</b>
                <p
                  v-if="items.type == 'Feedback'"
                  class="text-success font-weight-bold"
                >{{items.type}}</p>
                <p
                  v-if="items.type == 'Complaint'"
                  class="text-warning font-weight-bold"
                >{{items.type}}</p>
                <p v-if="items.type == 'Claim'" class="text-danger font-weight-bold">{{items.type}}</p>
                <p
                  v-if="items.type == 'Information'"
                  class="text-info font-weight-bold"
                >{{items.type}}</p>
                <br />
              </b-col>
            </b-row>
          </b-card>
          <br />
          <p>
            <b-button block variant="primary">
              <i class="fas fa-save"></i> Save Change
            </b-button>
          </p>
          <br />
          <h4 class="font-weight-bold">Comments</h4>
          <b-button block variant="outline-primary" @click="commentShow = !commentShow">
            <i class="fas fa-plus"></i> Add Comment
          </b-button>
          <b-card
            bg-variant="light"
            v-for="item in items.comments"
            :key="item"
            class="text-left mt-4"
          >
            <b-row>
              <b-col>
                <b class="text-primary">{{item.username}}</b>
              </b-col>
              <b-col class="text-right">
                <i class="fas fa-times text-danger"></i>
              </b-col>
            </b-row>
            <p class="text-warning">{{item.create_at}}</p>
            <p>{{item.comment}}</p>
            <p v-if="item.status == 'Internal'" class="text-success font-weight-bold">Internal</p>
            <p v-else-if="item.status == 'Eksternal'" class="text-danger font-weight-bold">External</p>
          </b-card>
        </b-col>
        <b-col class="text-left ml-3 my-3" md="2"></b-col>
        <b-col class="my-3"></b-col>
      </b-row>
    </b-card>

    <b-modal id="modal-image1" size="xl" title="Image 1">
      <img
        src="https://s4.bukalapak.com/uploads/attachment/451051/paxel_banner_1.png"
        alt
        width="400px"
        height="200px"
      />
    </b-modal>
    <b-modal id="modal-image2" size="xl" title="Image 2">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABjFBMVEVXUJT///9XUJZZT5T///3///xXT5ZZUJJWUZNTS5n///pZT5N6eJ3x8PXEwtdNRophWJXnQmL/uRZXT5r7uhhST5mqSX3uQWGng2BqT5DaRWXxQFxXUZCFTYBSR5XqRFztPmmZlbXaR150cJd8ZH//txbtQlDbQ2r/vwqeSYDrQGbqQ1WBbnBcUYtLRI5QU5WKaXDjTlunpMHKzNhSRp1ybJ1tTJPBk09qYplWU4l9dqbt7O1PVY9PSYdjSZjY2OKhemO5klr///BIR6SSjq2AfLJfV6HXp0RxUov8wwualb5GUJ1oZqHrrzekobJzY4hsWIdEO4nXrDOhd3fVpFHLRmOWSYKVS3VcWYimdGa1lUuOhrfPy+GbfHOyQInGgFfxpSCTZ2KPZYDIqjDiuSjdgEr8mi9TQqfyszLmikJ6TYO+Zmc8M4zKyOZGPHk1I4szJ3LBwMSpqbO1r9m1tbzb3NqwTmixSXRNXH3jXVNLRLXASnHmajv+N2LrlE2UfF3TRHeSRYv5ozSyk1MZ7q35AAARPUlEQVR4nO2bj3fbRLbHNZI90tiWZGeiuDQTOY7XTZpgGRSJWnZcQeuU5gcBL9AYkrLsz7K80Lfw6Oa9LTzYff/4u3dspy41LT1xUvac+Zw2lqWRMl/dmftDmmiaQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVBcCjqFH3ljOnmD6q+6g+fHMk3NajatZ2kKIUxT/3fXaJm82fSmosH/ZrP5qnt4Xgy2Z355b2EapwvX773FNPNVd/FcCDDg0uOVjWsb155lo1Iurzx+CwYrp6+gb/qI811ki5n3Vsvry1NZLJcq66XVex5viBn1+qU6NwuF+aZ+vbRYqlRWV64+y+rqanmxVK78wWPWjHr9spxboaXdvVopl0oLnrxbIx86vntbW40vHy+W1t+877EZ9filcGlAz62webpYKpXKpUPv5pZJ8yNGwZDD9Mufbiwv/u8PkWZcshk57zp2GvvG+Rwdbf5YKS3DKF2+p3k38882MJuvfVxe/m7nfrR1yc6GB1WSI6mbN853mcby4vrhwvelSmlJY1tTWjT3Fq6V3qzvfBjxc/2ml4a6Ti5H7NY5FXofLJdK/9z7+3q5VF7yplyLU3F9eePNL+o79/fO9ZteFl3vOoTk7CI/3yi1XgNfucSbCzAby4d7xlZ+cl6jtxHeQgVsOFef//3eZYZ+U3cdksnYRXq++T9SqInDxcXK8qHHbk4GvgmF8/W1nTduX+ZcnK3C5k3j9PuVSnlJ8ybnIipsjhTO1WEu+peYhM9WobB04/D7CmxajOtYUCB4abORlwrrc/Mg8T7T6LTsRkBTyin1PE6fxC8dgxkFPLiorlnDfdSgw5EAu6Bywy/DM3QITvBvfPpsFeJFrNMKRMZD77V7j1cxmxnx44/LZTkPkT/d97n4iU/FyKnRIHCL7UKvEHe7Oh930uJ+IOJCr3fUct3hHs2Ne4JJiZQbbrtgMWhmmgYPutDyKHbd0S2avUK+tbBRriyfrlauVdbPKKNsVIiAIa8E0xT6xapjE4ntDPxRC8q6vePR7rTnYlrEuwfQZCAzpDwLwFumCWplQSO0Mxk8P0z8C1Jo3TQX1mEuQhZXubYxLjU2yuX1M4U4F29Eg6cnIwgMenYukwMyUk01GB4Jtu1MNpPNDjU6LpzHEpLNZY5lAzPoEYh4VZNCdC/Yo5NBYy24GIXCaHqH4G6Wl1f//tnpRJH4cWX9zXduIO+t1etrn/5DcDHxW3WNF+1MDrqWzaBG6HQYURBOWxlplUwOPmGvA0kmFZCn5EgvoJqgDTsHB6swFYMC7CS5W3CFTC5L2j4M59krBFvQL9chufnLh7eTKBkn4U1tYWP5zbwfRRHzr+yAFX/jWZPpHdVYAW899BbUICQTo8LgCPfmpMocGrLg6sIPs3AniAmTsH+MqmzwXF7DxhuBV8lie5tbF6RQP4U6469rOz9ETekHZbTgC4vLK1wA/L8ffDhXX7txe3BzikKnPXC7SSFFI6VdD23YgSF3UBPdLuwFCWkX3BRL8R4cP+T+Ltg1l92GSQvzETY7PbObVHE45Bz3IkYpKPRWN9b/Zw3Sl7ddbgx9uG7pqFB4nDPwgd136/UvoiSaCBljhbs+lAOe9zBFS7YoDok4DEXgcfAkQQdsBBmYJ/xYDtxqv5VFgWGf6mYAps6SODDA49TsLIh1L8KGFtV0cDIL/wcDcf4TBgOV4ygVOozSFTShAK9++8rc/BwX3kT+JhWCWaq+wL20jeO1isGBMxeCi2XBmW6IloshMujBAbTO2e8fw6jOpi5EChbj+Y4PWnSwJ47WNptx1iYVcitfKVXu+TfmISq8fTvxEl3uRoVy5oFZGCrUTGsiR3+i0MRGeoIjzpHuUDQExHDOGPN3wXCkho8KDHcTJyXOvAwZcMM08SAhPV/DmRFVCRyuXqDC603/xg5KfLAlo9bLKpQecqhQZzxwu602EIfgRIYKNTaQfkX6VDChQf0qKoxPgj5SI+CQw4tUuOX574AV58CKkFZNU6g/V6GwM2Mb0qCagnfMYrS4NbahJoJCNiuDn/PQxAcJfij90OaQFKWHwQUohHrfWASFOtzUT+fm12AuNljiiWcVWqb38woFx7Dh+JCr0tgmEPLHkXyskNLIwe+3bN+CcQmjtEp+SuhfhEI+VmhwkFif2/nkdrPZmGJDy9RfrFDoKFDmMxkZ8UHoUCEkeTW5+9sAEnLdGCrEWzHmFunRC/ClEwqF599Yw7kYNdlUG/4ChQ3ehdAI/Sa2BObd2Iama0vdpMCeKHyK4+5FxMOxQhDCE6a9s1ZfW3s7SihfqLyUQl0qDAQrgDWyJKwVkRDNWUPfZXL3K2wCGavdpZaeHyncdM6odvnMFIq3sCj0JhXiixhdo+4N0IJW5Ke/QCHm2yNPk0hP4+pBCJ/Z3QDrRnA52AQUQgDyj0BfDvNXcDX45kt6GlI7Cc7AMDVThU/bcAiDuTg3N//J3t4vGaVPFEL1AKYLQeFXmGJ2NfmoYKwQ4iMr2rfQj8rh2Ivok3hoPlW0zFQhm/Slo5dpiRd9KkO/+9kvsyH0EHMaKInAp+yCQgcVulBEaE8pdDdhembSPhgucwsSOS5YS47SwBjmiTSgM1VYKi1e38MqVudNigo9KoFfHEHoX9u5f3ptfUU3X6jw2A185gWJjVnXgMIoxdkW9n1IaXi/SqQvlc95sQ6p+UEKpRJJ+yCnj0kCafcjxt2guxvC5J9dXmqsLlYe32w2hdgyt7akDcUZEYT+tc9XlsuPPfFChTn7oDCohRghMseuBnk3+h+yWajFcS9Mse6rceq1QCoIdzmPoWUWt7CkkgVkbVDDZwUgi81Moba1sLhSXmhC7qgzj6NCxp/gfbpW/660vnjP016scFjLZ6DCI3EkuOkew3AcVe4QEMGvxrreTbHGBcvRfBDicUiyLcvHWnjUEiPnbjCzUbpFzavr65XTpbyZNJIGKoR0uTHCaN783XfrpasbQkAEfoHCUWiXhZSrW5AQtWwiv2azw8TG1jitST/aAv9i0n6KNwVKf27sd1BhBhpmMflp0xmOUnqvhE+bhg/WyuONEVdXlyuV5dK/fgigmPKerxATT5m92EeYlFJoNAArYtEuU7dMp2byaIBWPYjwRJ0NsK4PXcqgakxv5WQCC7eis9ulWBeHcL1Ocs7Xz5ZhWAvr+AZRUpb/ziivl9dL1679q16/f3tLT56vcHc3hVTFTsOWOzpKfbdwbGP+YqebYZyHapPmqzZxusMGzO3ZZDMxDSj9efdIPpazHzkFozv07Y2U2AXtnC+ELPAI3kKpMiGr8oTFSmWj8tnvMIG7Aglc/vnxMHCtVivp+tHZGz/T7Lq02Bq0LB75FPpqCu4PBi4bNoCqQgx8qJ8M2OSuqxfhfO5Tkw8fH7NgYHFOz/m2BCpwY+9w8UzfysdPL8e495rnQklch5K4YeSfH/GxbNChR+MuwbahyYfeutYQ0FDn0HceGfKRK75xFjAzDaiBZdBEE1Pdo/gUimPalgimgUc/n0DU2DT40vLIiuvlw2bzbHlNU9cx/t/GYmoNiqkoiV6Yl86Qmb0kgUHSXBoNVFCoP7sIwn8HnwV/cnuL5y9T4cwwNOtmc2n5ZxXqCRRT83P1tbcfJA+kQvGcCvjXiGUZWzfZEoSKdVB43Tt7VDq2IUt0CsXU/PyVBxooXDONyacYugkKs1lU+CtePGUYeW9pdQOMuHi4J/JnRhwB8x+Lqfr8lX+Awvkk2ppUKG1IfvUKDaP5JUhcKf+H12ww/RmGc3H+k4/qc18kUGc9OZfrvIbF3q5vnm9NwYWCCrl3d7W8svzX1yPxrEIqi6k5GKn1tY/23mpOWEuHjC6FFLrxzJvFXxWgULDm3avl8ue/vcswWmDiPZYHmyD7wac7UBN/Pv/7yJhUqAnda4ThwKTmq1je93Lob/35LzDbbrwBvA68MeL1IX94Dxcs/DGacmIQ/PrVSfbe/xO+Bl1DwF5rI4abcztz9bm19+7+W6+o5c2778Jsw7e980B9yPyIOhz46IOo8ap7eS503fzwt/PzaLj54cfE5lz93bd5k09JFOVyRvw5hBrTgz+0ghz06TVJdIxpGlPSNEsbruEQs1tuLhoP7v5mOu9/4O5N/zWYUQ/TZYlB+TS3aqLL4pMhBRec4LoWXDH/9JGzK0Mur2nDnH1GcJY0cfk6Ml6yP0Iw9jOJPpVpEB17G+ht99kOWRbXXM4m3TAoFJz5PmM86E6tk7g2LETo7P4qwmpqlE8Hy5+p59zZhgqQW63tO8Pveb69eecnbWg/0PTCZotPrhelVOxvt9vt7e3GrvNUsAlG6zn07RYuKbK29+kr89Yy87bzjAUp6TEYiUwXfpUUuWDcaujMEnj3aUIOgmCX7DPBTJHnLhSCkAOJ4fNuQpKv7FZkQj1oeYLnebCZ+pTiWgCSM7kVHJMQy0+dNahFTdbwIhhb3OP0nGszf7lC4kTRASGFyCjWapxFVTKIzLgYdePtlgyVXkwOirxKWrW2yRlltUKRcirgXuQKrXg/NpIB4zEdxKwRtxNK006rNVyxkkuDqJdBhd1BIe5GxVhEPKlZTBTaJqWXUM9IhSlpt+BHL+iBPTqFaJdwMGk72SQ5UnV1zejatzKkvZv5Gg4X/aRDMnbB50Ja+6QfuP5XtqiRb8ix+4jcsuP/wvfIUR4U5uCqwu5kw6DrQG6YJi1y4LoOKcY2NryMsSsVFjqd1G6TXtTqFdudtF8lyaYdn4Sk7TukBV6IF4gTs2rmuBVmwn5qt0Rqm0OFzreOcxQ4thnnyGb7iMQszN951ImlDYuZapr7OlOAkw7IQatHjk8e2X3e2ex37OKdTmpeQi48VBgT0o5B4SA8dh51oN+bmZ4f2I96uweZqgtuqEhCF+ehW8w4bubr3u63pIYlS5XYHbsT9h1bxNnjvhuTzkHRjR6lrsVxlGZDkc1WW5nwBG6c1/+WuHAP2qRgEqfX+5oMLuGPCKTCo77jPGzDR4d8E3ZQYS6buq7dSYEjyjUdFAawe98Chd2c3B9TCxXGXXC+PiqEGpP67eMcKfTTjq8JOQ/DkzAN9jPh33LHJwwM2QjsbzY7PkwKZP+yRmnPF4LDKDVJ+J8nKSosHJHw5KvMw5OH+65OBQeFfbShVcw5fTv920mxBZ5TKmQ6o4FUuMu0Vnxycss5Se2HrrRhLozMgQ8KTzZJ7WFip77v5DJh9JBsymtcRg6Jc6zHDI5CA5g0aa4TVMmd4GtSG9gkxQfzuuCWnSG1A5ADNgzaOTslaRfKsyAkNSrksgTwNFXXDUknBRuCV3FcqfCbAMJDnDnwE5vYJFNj7H0Cl3R7pPMIXwlcvEBBeSuMIR+Bj33WDZ1Ce9ffD4WehEc+fA1lJNd5/E2ot8IiE9U2dYuh00sgWlC9Fra4BtlOocqLYcz1IA6ddsB46MToRO5UY5hpehE+IrfqhA2f0261CtmD23KcXpdfQrSwKOMuRYU8gNHoBxzs2YjgK6MiH8F3VGhhcmbmI69BIUXTWAAiICPTOXUxh+W6ALkMJixcJWINwQJX5mnclbUM9TnEPnxDyYVp+LjGltLAh0TrEhRizs+5aeq4BeYAIG2RqUbDoHkzL7M07K1Jca/sOC5Q1U2h4Un6cMU3ZoQyEc+bYFrIxPOYBPPGMCHHP1LKQ80C4CbuMg3cvIRRqk/+57r8lGYzteEy9eG7a820pDhdHpB7zacuMVwePjqfj+4EvsIaRjzMveX5FN+HaNqTCysUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKxcXz/zOubM9aYF+CAAAAAElFTkSuQmCC"
        alt
        width="200px"
        height="200px"
      />
    </b-modal>

    <b-modal v-model="commentShow" title-html="<b>New Comment</b>" title-tag="h4">
      <b-form-group
        id="fieldset-1"
        class="text-danger"
        label="External"
        label-class="font-weight-bold"
        label-for="input-1"
      >
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="New Comment...."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="fieldset-1"
        class="text-success"
        label="Internal"
        label-class="font-weight-bold"
        label-for="input-1"
      >
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="New Comment...."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-modal>
    {{items}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      modalShow: false,
      commentShow: false,
      selected: null,
      loading: true
    };
  },
  beforeCreate() {
    this.$store.dispatch("cxModule/getCxReport", this.$route.params.id);
  },
  mounted() {
    // Set the initial number of items
    this.$store.watch(
      state => state.cxModule.report_id,
      (newValue, oldValue) => {
        this.items = newValue;
        // Do whatever makes sense now
        if (this.items.length === 0) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      }
    );
  },
  methods: {
    changeStatus(e) {
      this.items.status = e;
    }
  }
};
</script>

<style>
</style>
