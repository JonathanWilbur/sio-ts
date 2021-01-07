/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EncodedSPIF,
    _decode_EncodedSPIF,
    _encode_EncodedSPIF,
} from "../SIOsAccessControl-MODULE/EncodedSPIF.ta";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../SIOsAccessControl-MODULE/SIGNED.ta";
export {
    EncodedSPIF,
    _decode_EncodedSPIF,
    _encode_EncodedSPIF,
} from "../SIOsAccessControl-MODULE/EncodedSPIF.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../SIOsAccessControl-MODULE/SIGNED.ta";

/* START_OF_SYMBOL_DEFINITION SecurityPolicyInformationFile */
/**
 * @summary SecurityPolicyInformationFile
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityPolicyInformationFile  ::=  SIGNED{EncodedSPIF}
 * ```
 */
export type SecurityPolicyInformationFile = SIGNED<EncodedSPIF>; // DefinedType
/* END_OF_SYMBOL_DEFINITION SecurityPolicyInformationFile */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityPolicyInformationFile */
let _cached_decoder_for_SecurityPolicyInformationFile: $.ASN1Decoder<SecurityPolicyInformationFile> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityPolicyInformationFile */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityPolicyInformationFile */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyInformationFile
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyInformationFile} The decoded data structure.
 */
export function _decode_SecurityPolicyInformationFile(el: _Element) {
    if (!_cached_decoder_for_SecurityPolicyInformationFile) {
        _cached_decoder_for_SecurityPolicyInformationFile = _get_decoder_for_SIGNED<EncodedSPIF>(
            _decode_EncodedSPIF
        );
    }
    return _cached_decoder_for_SecurityPolicyInformationFile(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityPolicyInformationFile */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityPolicyInformationFile */
let _cached_encoder_for_SecurityPolicyInformationFile: $.ASN1Encoder<SecurityPolicyInformationFile> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityPolicyInformationFile */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityPolicyInformationFile */
/**
 * @summary Encodes a(n) SecurityPolicyInformationFile into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyInformationFile, encoded as an ASN.1 Element.
 */
export function _encode_SecurityPolicyInformationFile(
    value: SecurityPolicyInformationFile,
    elGetter: $.ASN1Encoder<SecurityPolicyInformationFile>
) {
    if (!_cached_encoder_for_SecurityPolicyInformationFile) {
        _cached_encoder_for_SecurityPolicyInformationFile = _get_encoder_for_SIGNED<EncodedSPIF>(
            _encode_EncodedSPIF
        );
    }
    return _cached_encoder_for_SecurityPolicyInformationFile(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityPolicyInformationFile */

/* eslint-enable */
