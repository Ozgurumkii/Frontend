<template>
    <div class="row">
        <div class="col-sm-6 m-auto">
            <form class="mt-5 mb-3">
                <div class="alert alert-info text-center">
                    Apartman Ekleme Formu
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Postcode (örn: MK14 7QD)">
                    <small class="form-text text-muted">Sadece postcode girişi yapınız</small>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" checked>
                    <label class="form-check-label text-success" for="exampleCheck1">Apartman Kullanımda</label>
                </div>
                <button type="submit" class="btn btn-primary float-right">Ekle</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>