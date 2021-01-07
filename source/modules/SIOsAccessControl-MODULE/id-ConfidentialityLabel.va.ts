/* eslint-disable */
import {
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION id_ConfidentialityLabel */
/**
 * @summary id_ConfidentialityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ConfidentialityLabel OBJECT IDENTIFIER ::= {joint-iso-itu-t sios(24) specification(0) securityLabels(1)
 *    confidentiality(0)}
 * ```
 *
 * @constant
 */
export const id_ConfidentialityLabel: OBJECT_IDENTIFIER = new _OID(
    [
        /* sios */ 24,
        /* specification */ 0,
        /* securityLabels */ 1,
        /* confidentiality */ 0,
    ],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION id_ConfidentialityLabel */

/* eslint-enable */
