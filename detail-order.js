const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("id");

const allOrders = JSON.parse(localStorage.getItem("cleanwash_orders")) || [];
const currentOrder = allOrders.find((order) => order.id == orderId);

if (currentOrder) {
  document.getElementById("order-id-title").innerText =
    `Detail Pesanan #${currentOrder.id}`;

  document.getElementById("order-date").innerText =
    `Tanggal: ${currentOrder.date}`;

  const progressBar = document.getElementById("main-progress-bar");
  const progressLabel = document.getElementById("progress-label");

  document.getElementById("cust-name").innerText = currentOrder.customerName;
  document.getElementById("cust-phone").innerText = currentOrder.customerPhone;
  document.getElementById("cust-address").innerText =
    currentOrder.customerAddress;

  if (currentOrder.status === "Pending") {
    progressBar.style.width = "33%";
    progressBar.className =
      "progress-bar progress-bar-striped progress-bar-animated bg-danger";
    progressLabel.innerText = "Pending";
  } else if (currentOrder.status === "Proses") {
    progressBar.style.width = "66%";
    progressBar.className =
      "progress-bar progress-bar-striped progress-bar-animated bg-warning";
    progressLabel.innerText = "Proses";
  } else {
    progressBar.style.width = "100%";
    progressBar.className =
      "progress-bar progress-bar-striped progress-bar-animated bg-success";
    progressLabel.innerText = "Selesai";
  }

  let maxDays = 0;
  currentOrder.items.forEach((item) => {
    const days = parseInt(item.estimate) || 0;
    if (days > maxDays) maxDays = days;
  });
  document.getElementById("order-estimate").innerText = ` ${maxDays} Hari`;
  document.getElementById("total-price").innerText = currentOrder.total;

  const itemsList = document.getElementById("items-list");
  itemsList.innerHTML = "";

  currentOrder.items.forEach((item) => {
    itemsList.innerHTML += `
          <li class="list-group-item d-flex justify-content-between align-items-start py-3">
            <div>
              <div class="fw-bold">${item.name}</div>
              <small class="text-muted">
                Jumlah: ${item.qty} ${item.unit} | Estimasi: ${item.estimate}
              </small>
            </div>
            <div class="text-end">
              <div class="fw-bold text-dark">Rp ${item.price.toLocaleString("id-ID")}</div>
              <small class="text-muted">per unit</small>
            </div>
          </li>
        `;
  });

  document.getElementById("total-price").innerText = currentOrder.total;
} else {
  alert("Pesanan tidak ditemukan!");
  window.location.href = "riwayat-order.html";
}
