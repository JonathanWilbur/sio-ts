/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION VersionInformationData */
/**
 * @summary VersionInformationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VersionInformationData  ::=  INTEGER {v1(0)}(0..MAX)
 * ```
 */
export type VersionInformationData = INTEGER;
/* END_OF_SYMBOL_DEFINITION VersionInformationData */

/* START_OF_SYMBOL_DEFINITION VersionInformationData_v1 */
/**
 * @summary VersionInformationData_v1
 * @constant
 * @type {number}
 */
export const VersionInformationData_v1: VersionInformationData = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION VersionInformationData_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary VersionInformationData_v1
 * @constant
 * @type {number}
 */
export const v1: VersionInformationData = VersionInformationData_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VersionInformationData */
let _cached_decoder_for_VersionInformationData: $.ASN1Decoder<VersionInformationData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VersionInformationData */

/* START_OF_SYMBOL_DEFINITION _decode_VersionInformationData */
/**
 * @summary Decodes an ASN.1 element into a(n) VersionInformationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VersionInformationData} The decoded data structure.
 */
export function _decode_VersionInformationData(el: _Element) {
    if (!_cached_decoder_for_VersionInformationData) {
        _cached_decoder_for_VersionInformationData = $._decodeInteger;
    }
    return _cached_decoder_for_VersionInformationData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VersionInformationData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VersionInformationData */
let _cached_encoder_for_VersionInformationData: $.ASN1Encoder<VersionInformationData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VersionInformationData */

/* START_OF_SYMBOL_DEFINITION _encode_VersionInformationData */
/**
 * @summary Encodes a(n) VersionInformationData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VersionInformationData, encoded as an ASN.1 Element.
 */
export function _encode_VersionInformationData(
    value: VersionInformationData,
    elGetter: $.ASN1Encoder<VersionInformationData>
) {
    if (!_cached_encoder_for_VersionInformationData) {
        _cached_encoder_for_VersionInformationData = $._encodeInteger;
    }
    return _cached_encoder_for_VersionInformationData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VersionInformationData */

/* eslint-enable */
