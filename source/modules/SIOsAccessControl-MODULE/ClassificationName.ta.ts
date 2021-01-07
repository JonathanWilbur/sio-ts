/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION ClassificationName */
/**
 * @summary ClassificationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassificationName  ::=  DirectoryString{ubClassificationNameLength}
 * ```
 */
export type ClassificationName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClassificationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassificationName */
let _cached_decoder_for_ClassificationName: $.ASN1Decoder<ClassificationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassificationName */

/* START_OF_SYMBOL_DEFINITION _decode_ClassificationName */
/**
 * @summary Decodes an ASN.1 element into a(n) ClassificationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassificationName} The decoded data structure.
 */
export function _decode_ClassificationName(el: _Element) {
    if (!_cached_decoder_for_ClassificationName) {
        _cached_decoder_for_ClassificationName = _decode_DirectoryString;
    }
    return _cached_decoder_for_ClassificationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClassificationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassificationName */
let _cached_encoder_for_ClassificationName: $.ASN1Encoder<ClassificationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassificationName */

/* START_OF_SYMBOL_DEFINITION _encode_ClassificationName */
/**
 * @summary Encodes a(n) ClassificationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassificationName, encoded as an ASN.1 Element.
 */
export function _encode_ClassificationName(
    value: ClassificationName,
    elGetter: $.ASN1Encoder<ClassificationName>
) {
    if (!_cached_encoder_for_ClassificationName) {
        _cached_encoder_for_ClassificationName = _encode_DirectoryString;
    }
    return _cached_encoder_for_ClassificationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClassificationName */

/* eslint-enable */
