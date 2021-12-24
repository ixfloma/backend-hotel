import db from "../config/database.js";

// Insert Rekord to Database
export const insertRekord = (data, result) => {
    // db.query("insert into inap(kode_tamu,tgl_inap,tgl_keluar,no_kamar,jenis_kamar) values(?,STR_TO_DATE(?),STR_TO_DATE(?),?,?)", [data.kode_tamu, data.tgl_inap, data.tgl_keluar,data.no_kamar,data.jenis_kamar], (err, results) => {             
    db.query("INSERT INTO inap SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getTamu = (result) => {
    db.query("SELECT * FROM tamu", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getViewPartial = (data, result) => {
    db.query("SELECT i.id_inap, t.nama_tamu, i.tgl_inap, i.tgl_keluar, i.no_kamar, i.jenis_kamar, i.kode_tamu FROM inap i LEFT JOIN tamu t ON i.kode_tamu = t.kode_tamu WHERE MONTH(`tgl_inap`) = ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getView = (result) => {
    db.query("SELECT i.id_inap, t.nama_tamu, i.tgl_inap, i.tgl_keluar, i.no_kamar, i.jenis_kamar, i.kode_tamu FROM inap i LEFT JOIN tamu t ON i.kode_tamu = t.kode_tamu", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}