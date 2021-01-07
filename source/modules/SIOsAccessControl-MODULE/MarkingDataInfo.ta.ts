/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MarkingData,
    _decode_MarkingData,
    _encode_MarkingData,
} from "../SIOsAccessControl-MODULE/MarkingData.ta";
export {
    MarkingData,
    _decode_MarkingData,
    _encode_MarkingData,
} from "../SIOsAccessControl-MODULE/MarkingData.ta";

/* START_OF_SYMBOL_DEFINITION MarkingDataInfo */
/**
 * @summary MarkingDataInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingDataInfo  ::=  SEQUENCE SIZE (1..MAX) OF MarkingData
 * ```
 */
export type MarkingDataInfo = MarkingData[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MarkingDataInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MarkingDataInfo */
let _cached_decoder_for_MarkingDataInfo: $.ASN1Decoder<MarkingDataInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MarkingDataInfo */

/* START_OF_SYMBOL_DEFINITION _decode_MarkingDataInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) MarkingDataInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MarkingDataInfo} The decoded data structure.
 */
export function _decode_MarkingDataInfo(el: _Element) {
    if (!_cached_decoder_for_MarkingDataInfo) {
        _cached_decoder_for_MarkingDataInfo = $._decodeSequenceOf<MarkingData>(
            () => _decode_MarkingData
        );
    }
    return _cached_decoder_for_MarkingDataInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MarkingDataInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MarkingDataInfo */
let _cached_encoder_for_MarkingDataInfo: $.ASN1Encoder<MarkingDataInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MarkingDataInfo */

/* START_OF_SYMBOL_DEFINITION _encode_MarkingDataInfo */
/**
 * @summary Encodes a(n) MarkingDataInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MarkingDataInfo, encoded as an ASN.1 Element.
 */
export function _encode_MarkingDataInfo(
    value: MarkingDataInfo,
    elGetter: $.ASN1Encoder<MarkingDataInfo>
) {
    if (!_cached_encoder_for_MarkingDataInfo) {
        _cached_encoder_for_MarkingDataInfo = $._encodeSequenceOf<MarkingData>(
            () => _encode_MarkingData,
            $.BER
        );
    }
    return _cached_encoder_for_MarkingDataInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MarkingDataInfo */

/* eslint-enable */
