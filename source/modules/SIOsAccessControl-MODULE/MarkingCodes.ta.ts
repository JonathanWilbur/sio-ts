/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MarkingCode,
    _decode_MarkingCode,
    _encode_MarkingCode,
} from "../SIOsAccessControl-MODULE/MarkingCode.ta";
export {
    documentEnd /* IMPORTED_SHORT_NAMED_INTEGER */,
    documentStart /* IMPORTED_SHORT_NAMED_INTEGER */,
    MarkingCode,
    MarkingCode_documentEnd /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_documentStart /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_noMarkingDisplay /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_noNameDisplay /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_pageBottom /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_pageTop /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_pageTopBottom /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_suppressClassName /* IMPORTED_LONG_NAMED_INTEGER */,
    MarkingCode_unused /* IMPORTED_LONG_NAMED_INTEGER */,
    noMarkingDisplay /* IMPORTED_SHORT_NAMED_INTEGER */,
    noNameDisplay /* IMPORTED_SHORT_NAMED_INTEGER */,
    pageBottom /* IMPORTED_SHORT_NAMED_INTEGER */,
    pageTop /* IMPORTED_SHORT_NAMED_INTEGER */,
    pageTopBottom /* IMPORTED_SHORT_NAMED_INTEGER */,
    suppressClassName /* IMPORTED_SHORT_NAMED_INTEGER */,
    unused /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_MarkingCode,
    _encode_MarkingCode,
} from "../SIOsAccessControl-MODULE/MarkingCode.ta";

/* START_OF_SYMBOL_DEFINITION MarkingCodes */
/**
 * @summary MarkingCodes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingCodes  ::=  SEQUENCE SIZE (1..MAX) OF MarkingCode
 * ```
 */
export type MarkingCodes = MarkingCode[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MarkingCodes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MarkingCodes */
let _cached_decoder_for_MarkingCodes: $.ASN1Decoder<MarkingCodes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MarkingCodes */

/* START_OF_SYMBOL_DEFINITION _decode_MarkingCodes */
/**
 * @summary Decodes an ASN.1 element into a(n) MarkingCodes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MarkingCodes} The decoded data structure.
 */
export function _decode_MarkingCodes(el: _Element) {
    if (!_cached_decoder_for_MarkingCodes) {
        _cached_decoder_for_MarkingCodes = $._decodeSequenceOf<MarkingCode>(
            () => _decode_MarkingCode
        );
    }
    return _cached_decoder_for_MarkingCodes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MarkingCodes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MarkingCodes */
let _cached_encoder_for_MarkingCodes: $.ASN1Encoder<MarkingCodes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MarkingCodes */

/* START_OF_SYMBOL_DEFINITION _encode_MarkingCodes */
/**
 * @summary Encodes a(n) MarkingCodes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MarkingCodes, encoded as an ASN.1 Element.
 */
export function _encode_MarkingCodes(
    value: MarkingCodes,
    elGetter: $.ASN1Encoder<MarkingCodes>
) {
    if (!_cached_encoder_for_MarkingCodes) {
        _cached_encoder_for_MarkingCodes = $._encodeSequenceOf<MarkingCode>(
            () => _encode_MarkingCode,
            $.BER
        );
    }
    return _cached_encoder_for_MarkingCodes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MarkingCodes */

/* eslint-enable */
