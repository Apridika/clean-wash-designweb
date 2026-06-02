const dummyOrder = [
  {
    id: "001",
    layanan: "Cuci Kering",
    berat: "5kg",
    status: "Selesai",
    total: "Rp 50.000",
  },
  {
    id: "002",
    layanan: "Cuci Setrika",
    berat: "3kg",
    status: "Proses",
    total: "Rp 30.000",
  },
  {
    id: "003",
    layanan: "Cuci Karpet",
    berat: "10kg",
    status: "Pending",
    total: "Rp 100.000",
  },
  {
    id: "004",
    layanan: "Setrika Saja",
    berat: "4kg",
    status: "Selesai",
    total: "Rp 20.000",
  },
];

const orderList = document.getElementById("order-list");

function getStatusClass(status) {
  if (status === "Selesai") return "text-bg-success";
  if (status === "Proses") return "text-bg-warning";
  return "text-bg-danger";
}

function renderOrders() {
  orderList.innerHTML = "";

  dummyOrder.forEach((order) => {
    const cardHTML = `
        <div class="col">
          <div class="card h-100">
            <img src="waduh.jpg" class="card-img-top" alt="mesin-cuci">
            <div class="card-body text-start">
              <div class="d-flex justify-content-between mb-2">
                <h5 class="card-title">Pesanan #${order.id}</h5>
                <h1 class="badge p-2 ${getStatusClass(order.status)}">${order.status}</h1>
              </div>
              <p class="card-text"><strong>Layanan:</strong> ${order.layanan}</p>
              <p class="card-text"><strong>Berat:</strong> ${order.berat}</p>
              <p class="card-text"><strong>Total:</strong> ${order.total}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary w-100 p-2">Detail Pesanan</button>
            </div>
          </div>
        </div>
      `;

    orderList.innerHTML += cardHTML;
  });
}

setTimeout(renderOrders, 2000);
