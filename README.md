Contains a mapping file and a data file.

Creates the diferent SQL commands... the initial implementation has the SQL Insert statement creation.

The expected output wit the included json files is:

INSERT INTO cancelacion_hipoteca (party, book)
VALUES (par, Tomo-123);
INSERT INTO pago_de_derechos (paymentOrder, totalRights)
VALUES (1234, 13.2);
INSERT INTO paymentRights (PaymentNumber, fechaDeRegistro)
VALUES (llkkm1123, 01-01-2024);

